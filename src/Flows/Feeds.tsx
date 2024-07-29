import React from "react";
import { PostCreator } from "../Components/PostCreator";

export interface Post {
  name: string;
  time: string;
  avatar: string;
  emoji: string;
  comments: string;
  options: boolean;
  isEdited: boolean;
  content: string;
}

const POSTS: Post[] = [
  {
    name: "Theresa Webb",
    time: "5mins ago",
    avatar: "/svgs/avatar1.svg",
    emoji: "👋",
    comments: "24",
    options: true,
    isEdited: true,
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Ash Webb",
    time: "20mins ago",
    avatar: "/svgs/avatar2.svg",
    emoji: "👋",
    comments: "24",
    options: true,
    isEdited: false,
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export const Feeds = () => {
  return (
    <div className="flex justify-center items-center pt-[70px]">
      <div className="text-center">
        <div className="text-[28px] font-bold text-[#C5C7CA]">Hello Jane</div>
        <div className="text-[16px] mt-3 text-[#7F8084]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>
        <div className="py-8">
          <PostCreator />
        </div>
        {POSTS.map((post, index) => (
          <div key={index} className="mt-4">
            <PostCreator readOnly={true} content={post} />
          </div>
        ))}
      </div>
    </div>
  );
};
