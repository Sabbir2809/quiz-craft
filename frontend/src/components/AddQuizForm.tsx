import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useAppSelector } from "../redux/hooks";

export function AddQuizForm() {
  const { title } = useAppSelector((state) => state.module);
  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <h1>{title}</h1>
      <Typography placeholder={""} color="gray" className="mt-1 font-normal">
        Please Add Your Module Here
      </Typography>
      <form className="mt-8 mb-2  w-full mx-auto">
        <div className="mb-1 grid grid-cols-2 gap-4">
          <div>
            <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Module Title <span className="text-red-500">*</span>
            </Typography>
            <Input
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
              Description <span className="text-red-500">*</span>
            </Typography>
            <Input
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
              Description <span className="text-red-500">*</span>
            </Typography>
            <Input
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
              Option 1 <span className="text-red-500">*</span>
            </Typography>
            <Input
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
              Option 2 <span className="text-red-500">*</span>
            </Typography>
            <Input
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
              Option 3 <span className="text-red-500">*</span>
            </Typography>
            <Input
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
              Option 4 <span className="text-red-500">*</span>
            </Typography>
            <Input
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button placeholder={""} size="md">
            Add Quiz
          </Button>
        </div>
      </form>
    </Card>
  );
}
