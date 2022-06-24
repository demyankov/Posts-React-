import Button from "../template/button/button"
import PostsList from "./postsList/postsList";
import { SectionPostsHeader, SectionPosts, PostsListWrapper } from './postsPageStyle';
import {PostType} from '../../data/dataType';
import { H1 } from "../template/styles/H1Styles";
import { H2 } from "../template/title/tittleStyles";


const PostsPage = ({postsData, title, isAllPosts}:{postsData:PostType[]; title:string ;isAllPosts?:boolean}) =>{
return (<
    SectionPosts>
        <SectionPostsHeader>    
            <H2>{title}</H2>         
            {isAllPosts ? <Button buttonText = 'Add' maxWidth = '6rem'/>: null}       
        </SectionPostsHeader>
        <PostsListWrapper>
            <PostsList postsData = {postsData}/>
        </PostsListWrapper>
    </SectionPosts>)
}

export default PostsPage