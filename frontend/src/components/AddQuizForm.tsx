import { Button, Card, Input, Option, Select, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { usePublishQuizMutation } from "../redux/features/quiz/quizApi";
import {
  addQuiz,
  resetQuizForm,
  resetQuizPublish,
  setCorrectOption,
  setDescription,
  setOptions,
  setQuestion,
} from "../redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export function AddQuizForm() {
  const { title, moduleId } = useAppSelector((state) => state.module);
  const { options, question, description, quiz } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const [publishQuiz] = usePublishQuizMutation();

  const handleAddQuiz = () => {
    dispatch(addQuiz(moduleId));
    dispatch(resetQuizForm());
  };

  const handlePublish = async () => {
    await publishQuiz(quiz);
    dispatch(resetQuizPublish());
    toast.success("Quiz Published Successfully");
  };

  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        {title}
      </Typography>
      <Typography placeholder={""} color="gray" className="mt-1 font-normal">
        Please Add Your Quiz Below
      </Typography>
      <form className="mt-8 mb-2 w-full">
        <div className="mb-1 grid grid-cols-2 gap-4">
          <div>
            <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Question
            </Typography>
            <Input
              onChange={(e) => dispatch(setQuestion(e.target.value))}
              value={question}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Description
            </Typography>
            <Input
              onChange={(e) => dispatch(setDescription(e.target.value))}
              value={description}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Option 1
            </Typography>
            <Input
              value={options[0]}
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Option 2
            </Typography>
            <Input
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              value={options[1]}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Option 3
            </Typography>
            <Input
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              value={options[2]}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Option 4
            </Typography>
            <Input
              value={options[3]}
              onBlur={(e) => dispatch(setOptions(e.target.value))}
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Select placeholder={""} onChange={(value) => dispatch(setCorrectOption(value))}>
              {options.map((option) => {
                return <Option value={option}>{option}</Option>;
              })}
            </Select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleAddQuiz} placeholder={""} size="md">
            Add Quiz
          </Button>
          <Button onClick={handlePublish} placeholder={""} size="md" variant="gradient" className="ml-4">
            Publish
          </Button>
        </div>
      </form>
    </Card>
  );
}
