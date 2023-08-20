import React from "react";
import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";
import {HeartIcon} from "./HeartIcon";

export default function App() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[800px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://cdn.pixabay.com/photo/2023/08/11/06/02/bride-8182890_1280.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Item Name</h3>
                <p className="text-small text-foreground/80">Price</p>
                <h1 className="text-small font-medium mt-2">Item description</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <div className="flex justify-between">
              </div>
            </div>

            <div className="flex w-full items-center justify-center">

            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
