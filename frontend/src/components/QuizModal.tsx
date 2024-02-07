/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dialog, DialogBody, DialogFooter, Spinner, Typography } from "@material-tailwind/react";
import React from "react";
import { useGetAllQuizByModuleIdQuery } from "../redux/features/quiz/quizApi";
import { setCurrentQuestionIndex } from "../redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export function QuizModal({ moduleId }: { moduleId: string }) {
  const dispatch = useAppDispatch();
  const { currentQuestionsIndex } = useAppSelector((state) => state.quiz);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const { data: quizes, isLoading } = useGetAllQuizByModuleIdQuery(moduleId);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <Button size="sm" placeholder={""} onClick={handleOpen} variant="gradient">
        Start Quiz
      </Button>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogBody placeholder={""}>
          {quizes?.data.map(
            (quiz: any, index: number) =>
              currentQuestionsIndex === index && (
                <div className="">
                  <Typography placeholder={""} variant="h5" color="blue-gray">
                    {quiz.question}
                  </Typography>
                  <p>{quiz.description}</p>
                </div>
              )
          )}
          <div className="grid grid-cols-2 gap-4">
            {quizes?.data[currentQuestionsIndex]?.options.map((option: any) => (
              <Button
                size="sm"
                placeholder={""}
                variant={
                  (quizes?.data[currentQuestionsIndex]?.correctOption === option && "filled") || "outlined"
                }
                color={(quizes?.data[currentQuestionsIndex]?.correctOption === option && "green") || "gray"}>
                {option}
              </Button>
            ))}
          </div>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <div className="flex justify-end space-x-4">
            {currentQuestionsIndex > 0 && (
              <Button
                size="sm"
                placeholder={""}
                onClick={() => dispatch(setCurrentQuestionIndex(currentQuestionsIndex - 1))}
                variant="gradient">
                Previous
              </Button>
            )}

            {(currentQuestionsIndex < quizes.data.length - 1 && (
              <Button
                size="sm"
                placeholder={""}
                onClick={() => dispatch(setCurrentQuestionIndex(currentQuestionsIndex + 1))}
                variant="gradient">
                Next
              </Button>
            )) || (
              <Button size="sm" placeholder={""} variant="gradient">
                Submit
              </Button>
            )}
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
