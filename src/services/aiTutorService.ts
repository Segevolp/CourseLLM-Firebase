import { askGemini } from './generativeAi';

const courseData: { [key: string]: { name: string, description: string } } = {
  '1': { name: 'Introduction to Computer Science', description: 'Fundamentals of programming and computer science.' },
  '2': { name: 'Data Structures and Algorithms', description: 'Essential data structures and algorithms.' },
  '3': { name: 'Web Development', description: 'Building modern web applications.' },
  '4': { name: 'Database Systems', description: 'Understanding and using databases.' },
};

export const getCourseInfo = (courseId: string) => {
  return courseData[courseId] || { name: 'Course', description: 'This course covers a variety of topics.' };
};

export const getInitialMessage = (courseName: string) => {
  return `Hello! I'm your AI tutor for ${courseName}. To get started, could you tell me what you're most curious about learning in this course?`;
};

export const getGuidingQuestion = async (
  userMessage: string,
  courseName: string,
  courseDescription: string,
  chatHistory: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  return await askGemini(userMessage, courseName, courseDescription, chatHistory);
};
