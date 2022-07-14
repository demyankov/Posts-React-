import { SectionPostsHeader, SectionPosts, PostsListWrapper, PostsMain, PostsPromo } from './postsPageStyle';
import Card from "./postsCard/card";
import Button from '../../components/button/button';
import { H2 } from '../../components/title/tittleStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../enums/router';
import { useEffect, useState } from 'react';
import { getPosts, PostsResponse, PostType } from '../../api/getPosts';
import CurrentPostPage from './currentPostPage';

const PostsPage = ({title, btnText = "Add", url = AppRoute.PostsPage}:
{title:string, 
 btnText?:string | undefined, 
 url?:string | undefined}):JSX.Element =>{
    
    const [postsData, setPostsData] = useState<PostsResponse>(
        {  next: "",
           previous: "",
           count: 0,
           results: []
        }
    )

    const [errors, setErrors] = useState()
    const {postId} = useParams()

   useEffect (()=>{
    const abortController = new AbortController();

    getPosts({abortController, limit:4, offset:25})
    .then(response=>{setPostsData(response)})
    .catch(errors=>setErrors(errors))

    return () => {
        abortController.abort();
      };
    },[])

    const currentPost = postsData.results.filter((post:PostType) => post.id === Number(postId)? post: null)
  
return (<
    SectionPosts>
        <SectionPostsHeader>    
            <H2>{title}</H2>        
            <Button url = {url} maxWidth = '6rem'>{btnText}</Button>  
        </SectionPostsHeader>        
        <PostsListWrapper>  
            <PostsMain>
            {   currentPost.length==0                        
                ?postsData.results.map((post:PostType) => 
                    <Card post = {post} key={post.id}/>)
                : <CurrentPostPage post = {currentPost[0]}/>
            }  
            </PostsMain>
            <PostsPromo>
               { postsData.results.map((post:PostType) => 
                    <Card post = {post} key={post.id}/>)}
            </PostsPromo>
        </PostsListWrapper>
    </SectionPosts>
)}

export default PostsPage
