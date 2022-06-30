import { SectionPostsHeader, SectionPosts, PostsListWrapper } from './postsPageStyle';
import {PostType} from '../../data/dataType';
import Card from "./postsCard/card";
import Button from '../../components/button/button';
import { H2 } from '../../components/title/tittleStyles';
import { useParams } from 'react-router-dom';
import { AppRoute } from '../../enums/router';


const PostsPage = ({postsData, title}:{postsData:PostType[]; title:string}) =>{
    const {postId} = useParams()

return (<
    SectionPosts>
        <SectionPostsHeader>    
            <H2>{title}</H2>         
            <Button url = {AppRoute.AddPost} maxWidth = '6rem'>Add </Button>  
        </SectionPostsHeader>
        <PostsListWrapper>       
        {Number(postId) !== NaN && postsData[Number(postId)]
        ? <Card post = {postsData[Number(postId)]}/>       
        :  postsData.map((post:any) => (
            <Card post = {post}  key={post.id}/>))}
        </PostsListWrapper>
    </SectionPosts>
)}

export default PostsPage
