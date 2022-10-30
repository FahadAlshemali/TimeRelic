import { Choice, Situation, SituationChoice } from "@prisma/client";
import { GetStaticPaths } from "next";
import Link from "next/link";
import React from "react";
import { prisma } from "../../lib/prisma";
type Props = { situation: Situation &{choice:SituationChoice[] & {choice:Choice}} }

export default function Index({ situation:situation }: Props) {
  console.log(situation.choice[0].choice.choice_text)
  return (
    <div className="relative w-100 h-screen overflow-hidden">
      <div
        className=" w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/backGround.png)",
        }}
      ></div>
      <div className=" w-screen h-screen flex flex-col justify-center items-center absolute border-t-black left-0 top-0">
        <img
          className="md:w-1/3 w-3/4 border-8 border-black border-solid"
          src={situation.image}
        />
        <div className=" md:w-2/5 w-4/5 py-5 px-4  bg-t min-h-40 mt-8  rounded-xl">
          <h1 className=" text-white  text-center  font-bold  text-2xl md:text-lg EnchantedLand ">
            {situation.story_text}
          </h1>
        </div>
        <div className="flex justify-center  align-center  flex-wrap mt-2 customC">
          <button
            type="button"
            className="  text-xl font-bold mx-1 mt-3"
            style={{
              backgroundImage:
                "url(https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/button.png)",
              backgroundSize: "100% 100%",
            }}
          >
            <Link href={`/situation/4`}>
          {situation.choice[0].choice.choice_text}
            </Link>
          </button>
          <button
            type="button"
            className="  text-xl font-bold mx-1 mt-3"
            style={{
              backgroundImage:
                "url(https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/button.png)",
              backgroundSize: "100% 100%",
            }}
          >
            {/* {SituationChoice?.choiceId.toString()} */}
          </button>
          <button
            type="button"
            className="  text-xl font-bold mx-1 mt-3"
            style={{
              backgroundImage:
                "url(https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/button.png)",
              backgroundSize: "100% 100%",
            }}
          >
            {/* {SituationChoice?.choiceId.valueOf()} */}
          </button>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const situation = await prisma.situation.findMany();
  const paths = situation.map((situationChoice) => ({
    params: { situation: situationChoice.id.toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async ({ params }: any) => {
  const id = params.situation;
  console.log(id);
  // const situation = await prisma.situationChoice.findFirst({
  //   where: { id:  id! }  ,
  //   include: { situationChoice: { include: { choice: true } } },
  // });
  const situation = await prisma.situation.findFirst({
    where: { id: id! },
    include: {choice:{include:{choice:true}}}
  });
  console.log(situation);
  return {
    props: { situation: situation}
    
  };
};
