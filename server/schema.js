import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from "graphql";
import db from "./db";

const articleType = new GraphQLObjectType({
  name: "Article",
  description: "This represents a Article",
  fields: () => ({
    author: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    excerpt: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    published: {
      type: GraphQLBoolean
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    },
    title: {
      type: GraphQLString
    }
  })
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "This is a root query",
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find().sort({updated_at:-1});
      }
    },
    article: {
      type: articleType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return db.Article.findById(args.id);
      }
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Articles mutations",
  fields: () => ({
    newArticle: {
      type: articleType,
      args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        content: { type: GraphQLString },
        tags: { type: GraphQLString }
      },
      resolve(parent, args) {
        console.log(args);
        const { title, author, content, tags } = args;
        return db.Article.create({ title, author, content, tags });
      }
    },

    deleteArticle: {
      type:GraphQLString,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
         return db.Article.deleteOne({_id:args.id});
      }
    },

    updateArticle:{
      type:articleType,
      args:{
        id:{type:GraphQLString},
        title:{type:GraphQLString},
        author:{type:GraphQLString},
        content:{type:GraphQLString},
        tags:{type:GraphQLString}
      },
      resolve(parent,args){
        const {title,author,content,tags}  = args
        return db.Article.findByIdAndUpdate({_id:args.id},{title,author,content,tags},{new:true})
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
