export const ARTICLES_QUERY = `
query{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_DETAIL_QUERY = id => `
  query{
    article(id:"${id}") {
      author
      content
      published
      tags
      title
      id
    }
  }
`;

export const NEW_ARTICLE_QUERY =  `
  mutation($title:String, $author:String, $content:String, $tags:String){
    newArticle(title:$title,author:$author,content:$content,tags:$tags){
      title
      author
      content
      tags
      id
    }

    
  }
`;

export const DELETE_ARTICLE_QUERY = id => `
  mutation{
    deleteArticle(id:"${id}")
  }
`;



export const UPDATE_ARTICLE_QUERY = `
  mutation($id:String,$title:String,$author:String,$content:String,$tags:String){
    updateArticle(id:$id,title:$title,author:$author,content:$content,tags:$tags){
      title
      author
      content
      tags
      id
    } 
  }
`;
