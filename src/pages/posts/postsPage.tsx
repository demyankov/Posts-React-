import { SectionPostsHeader, SectionPosts, PostsListWrapper } from './postsPageStyle';
import {PostType} from '../../data/dataType';
import Card from "./postsCard/card";
import Button from '../../components/button/button';
import { H2 } from '../../components/title/tittleStyles';


const PostsPage = ({postsData, title, isAllPosts}:{postsData:PostType[]; title:string ;isAllPosts?:boolean}) =>{
return (<
    SectionPosts>
        <SectionPostsHeader>    
            <H2>{title}</H2>         
            {isAllPosts ? <Button buttonText = 'Add' maxWidth = '6rem'/>: null}       
        </SectionPostsHeader>
        <PostsListWrapper>          
            {postsData.map((post) => (
                <Card
                  url={post.image ? post.image : ""}
                  cardTitle={post.title}
                  cardText={post.text}
                  cardDate={post.date}
                  key={post.id}
                />
              ))}
        </PostsListWrapper>
    </SectionPosts>)
}

export default PostsPage
