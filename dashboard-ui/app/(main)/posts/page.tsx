import BackButton from "@/components/ui/BackButton";
import PostPagination from "@/components/ui/posts/PostsPagination";
import PostTable from "@/components/ui/posts/PostsTable";

const PostPage = () => {
    return ( 
    <>
    <BackButton text="Go back" link='/' />
       <PostTable />
       <PostPagination />
    </> 
    );
}
 
export default PostPage;