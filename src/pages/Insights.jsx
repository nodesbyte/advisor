import { useParams } from "react-router-dom";
import FeaturedInsights from "../components/FeaturedInsights";  

export default function Insights() {
  const { postTitle } = useParams();
  
  return (
    <>
      <FeaturedInsights isInteractive={true} selectedPost={postTitle} />
    </>
  )
}