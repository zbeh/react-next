import { ICourseSummary } from "@/types/course-summary.interface"
import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";

export type CourseCardListProps = {
    courses:ICourseSummary[];
} 

async function getNewestCourses(count: number): Promise<ICourseSummary[]> {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    cache: "no-store",
    next: { revalidate: 24 * 60 * 60 },
  });
  return res.json();
}


export const CourseCardList :React.FC<CourseCardListProps> = async ({courses}:CourseCardListProps)=>{
    const newestCoursesData = await getNewestCourses(4);
    return (
      <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
        {newestCoursesData.map((course) => (
          <CourseCard key={`course-${course.slug}`} {...course} />
        ))}
      </div>
    );
}