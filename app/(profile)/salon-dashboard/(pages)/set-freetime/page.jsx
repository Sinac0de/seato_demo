"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import DatePicker from "./_parts/DatePicker";

const SetWeeklyFreetime = () => {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8 border-b-2 pb-5">
          <div>
            <Typography variant="h5" color="blue-gray">
              تنظیم هفتگی وقت خالی سالن
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              از طریق دکمه های زیر تاریخ های خالی خود را ست کنید.
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div>
          <DatePicker />
        </div>
      </CardBody>
    </Card>
  );
};

export default SetWeeklyFreetime;
