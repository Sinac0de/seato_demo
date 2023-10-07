import { useState, useEffect, useCallback } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import CommentCard from "./CommentCard";
import Spinner from "../Spinner/Spinner";

const RecentComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComments = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch("http://seato1.ir/api/comments/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const slicedComments = data.slice(0, 3);
      const transformedComments = slicedComments.map((comment) => {
        return {
          name: comment.name,
          comment: comment.comment,
          datetime: comment.commented_date,
        };
      });
      setComments(transformedComments);
    } catch (error) {
      alert(error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    comments && (
      <div className="flex flex-col p-10">
        <div className="flex justify-between lg:px-10">
          <h2 className="font-bold text-2xl">آخرین بازخورد&zwnj;ها</h2>
        </div>

        {isLoading ? (
          <div className="p-8 flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-flow-row gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-5 lg:px-10">
            {comments.length > 0 &&
              comments.map((comment, index) => (
                <CommentCard key={index} comment={comment} />
              ))}
          </div>
        )}
      </div>
    )
  );
};

export default RecentComments;
