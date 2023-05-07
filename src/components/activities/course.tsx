import { Database, DesktopTower, FileCode, FileHtml, TreeStructure } from "@phosphor-icons/react"
import { CardActivitys } from "../cards/activity"

type CourseProps = {
    refName: React.MutableRefObject<HTMLDivElement | null>;
}

export const Course = ({refName}:CourseProps) => {
    return (
        <div ref={refName}  className=" flex flex-col justify-center items-center gap-8 py-16">
          <div className="text-center">
            <h3>O que vocẽ aprenderá</h3>
            <p className=' w-[48rem]'>
              Lorem inpsum Lorem inpsumLorem inpsumLorem inpsumLorem inpsumLorem
              inpsumLorem inpsumLorem inpsumLorem inpsum
            </p>
          </div>

          <div className="flex flex-col px-16 gap-4">
            <CardActivitys
              title="Introdução a computação"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              borderColor="#ff4a97"
            >
              <DesktopTower size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Introdução a programação"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              borderColor="#ff4a97"
            >
              <FileCode size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Modelagem de sistemas e interfaces Web"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              borderColor="#ff4a97"
            >
              <TreeStructure size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Fundamentos de desenvolvimento Web I"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              borderColor="#ff4a97"
            >
              <FileHtml size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Fundamentos de desenvolvimento Web II"
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              borderColor="#ff4a97"
            >
              <Database size={32} color="white" />
            </CardActivitys>
          </div>
        </div>
    )
}