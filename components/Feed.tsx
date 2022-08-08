import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  DocumentData,
} from "@firebase/firestore";
import { db } from "../lib/firebase";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState<DocumentData>([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  return (
    <div className="max-w-2xl flex-grow border-l border-r border-gray-700 text-white sm:ml-[73px] xl:ml-[370px]">
      <div className="sticky top-0 z-50 flex items-center border-b border-gray-700 bg-black py-2 px-3 text-[#d9d9d9] sm:justify-between">
        <h2 className="text-lg font-bold sm:text-xl">Home</h2>
        <div className="hoverAnimation ml-auto flex h-9 w-9 items-center justify-center xl:px-0">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        {posts!.map((post: DocumentData) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Feed;
