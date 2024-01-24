/* eslint-disable @typescript-eslint/no-explicit-any */
import { Option, Select, Spinner } from "@material-tailwind/react";
import { useGetAllModulesQuery } from "../redux/api/baseApi";
import { setModule } from "../redux/features/module/moduleSlice";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export function SelectModule() {
  const { title: moduleTitle } = useAppSelector((state) => state.module);
  const { data: module, isLoading } = useGetAllModulesQuery("");
  const dispatch = useAppDispatch();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Spinner color="blue" />
      </div>
    );
  }
  return (
    <div>
      <div className="w-72 mx-auto h-52">
        <Select
          onChange={(moduleId) => {
            const title = module?.data?.find((module: any) => module._id === moduleId)?.title;

            if (moduleId && title) {
              dispatch(
                setModule({
                  title,
                  moduleId,
                })
              );
              dispatch(setActiveStepper(1));
            }
          }}
          value={moduleTitle}
          placeholder={""}
          label="Select Module">
          {module &&
            module?.data
              ?.slice()
              .reverse()
              .map((module: any) => (
                <Option key={module._id} value={module._id}>
                  {module.title}
                </Option>
              ))}
        </Select>
      </div>

      <div className="flex justify-end">{/* <AddModuleModal /> */}</div>
    </div>
  );
}
