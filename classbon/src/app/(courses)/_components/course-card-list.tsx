import { ICourseSummary } from "@/types/course-summary.interface"
import { CourseCard } from "./course-card";

export type CourseCardListProps = {
    courses:ICourseSummary[];
} 

export const CourseCardList :React.FC<CourseCardListProps> = ({courses}:CourseCardListProps)=>{
    return(
        <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
           {courses.map(course=>(
            <CourseCard key={`course-${course.slug}`} {...course}/>
           ))}
        </div>
    )
}