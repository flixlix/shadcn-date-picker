import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline"
import { siteConfig } from "@/config/site"
import DatePickerCode from "@/features/code-blocks/components/basic-date-picker"
import CalendarCode from "@/features/code-blocks/components/calendar-code"
import CopyCode from "@/features/code-blocks/components/copy-code"
import DemoDisplay from "@/features/code-blocks/components/demo-display"
import RangePickerCode from "@/features/code-blocks/components/range-picker"
import DatePicker, { DateRangePicker } from "@/features/date-picker"
import { Coffee, Info, Package } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="typography-h2:mt-6 container relative flex max-w-[768px] flex-1 flex-col gap-10 py-4">
      <section className="prose max-w-full">
        <DemoDisplay>
          <DatePicker />
        </DemoDisplay>
        <p>
          This custom shadcn component aims to provide a more advanced
          alternative to the default date picker component. It is built on top
          of the{" "}
          <code className="whitespace-pre rounded bg-slate-200/50 p-1 text-xs dark:bg-slate-500/20">
            react-day-picker
          </code>{" "}
          library, which provides a wide range of customization options.
          <br />
          Furthermore, it allows usage with{" "}
          <code className="whitespace-pre rounded bg-slate-200/50 p-1 text-xs dark:bg-slate-500/20">
            react-day-picker
          </code>{" "}
          version 9, which is not compatible with the current shadcn date picker
          component.
          <br />
          In the demo above, notice that you can click on the month label at the
          top to change the view to years.
        </p>
      </section>
      <Timeline>
        <TimelineItem status="done">
          <TimelineHeading>Install react-day-picker</TimelineHeading>
          <TimelineDot status="current" />
          <TimelineLine />
          <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
            <div className="prose">
              <p>
                Install the package by running the following command in your
                terminal:{" "}
                <code className="whitespace-pre rounded bg-slate-200/50 p-1 text-xs dark:bg-slate-500/20">
                  pnpm add react-day-picker@9.4.3
                </code>
                <br />
              </p>
            </div>
            <Alert>
              <Info className="size-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                It is important to have at least the version 9 of the
                react-day-picker package installed.
              </AlertDescription>
            </Alert>
            <div className="prose">
              <p>
                For more information on how to install the package, check the
                official documentation for getting started{" "}
                <Link href="https://daypicker.dev/start" target="_blank">
                  here
                </Link>
                .
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeading>Update the Calendar component</TimelineHeading>
          <TimelineDot />
          <TimelineLine />
          <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
            <Alert variant="warning">
              <Package className="size-4" />
              <AlertTitle>Update Required</AlertTitle>
              <AlertDescription>
                In case you have already used the calendar or date picker
                component from shadcn, you will need to update it with the
                following content. We are using{" "}
                <code className="whitespace-pre rounded bg-slate-200/50 p-1 text-xs dark:bg-slate-500/20">
                  react-day-picker
                </code>{" "}
                version 9, while shadcn is still on v8, which are not compatible
                with each other.
              </AlertDescription>
            </Alert>
            <div className="prose flex flex-col">
              <p>
                If you are starting from scratch, follow the instructions over{" "}
                <Link
                  href="https://ui.shadcn.com/docs/installation/next"
                  target="_blank"
                >
                  here
                </Link>
                .<br /> Once you have a working project with shadcn, create a{" "}
                <code className="whitespace-pre rounded bg-slate-200/50 p-1 text-xs dark:bg-slate-500/20">
                  components/ui/calendar.tsx
                </code>{" "}
                file and paste the following code:
              </p>
            </div>
            <CalendarCode />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeading>Date Picker Component</TimelineHeading>
          <TimelineDot />
          <TimelineLine />
          <TimelineContent className="mr-0">
            <div className="prose mr-0 w-full max-w-full prose-pre:mt-0">
              Now create a new date-picker file and paste the following code,
              depending on your use case.
              <section>
                <div className="flex items-center justify-between gap-x-2">
                  <h2>Basic Date Picker</h2>
                  <CopyCode
                    className="relative top-2 text-foreground hover:border hover:bg-transparent hover:text-foreground"
                    copyTooltip="Copy Demo Code"
                  />
                </div>
                <Tabs defaultValue="preview">
                  <TabsList className="mb-2 w-full [&>*]:flex-1">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview">
                    <DemoDisplay>
                      <DatePicker />
                    </DemoDisplay>
                  </TabsContent>
                  <TabsContent value="code">
                    <Suspense
                      fallback={
                        <Skeleton className="relative flex h-64 w-full items-center justify-center gap-2 text-center font-medium">
                          <Spinner />
                          loading code...
                        </Skeleton>
                      }
                    >
                      <DatePickerCode />
                    </Suspense>
                  </TabsContent>
                </Tabs>
                <p>
                  This is the basic date picker component that allows users to
                  select a single date. The main advantage of this component
                  over the shadcn default date picker is the ability navigate
                  through years instead of only one month at a time. This is
                  especially useful when selecting a date of birth.
                </p>
              </section>
              <section>
                <div className="flex items-center justify-between gap-x-2">
                  <h2>Date Range Picker</h2>
                  <CopyCode
                    className="relative top-2 text-foreground hover:border hover:bg-transparent hover:text-foreground"
                    copyTooltip="Copy Demo Code"
                    path="features/date-picker/date-range-picker.tsx"
                  />
                </div>
                <Tabs defaultValue="preview">
                  <TabsList className="mb-2 w-full [&>*]:flex-1">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview">
                    <DemoDisplay>
                      <DateRangePicker />
                    </DemoDisplay>
                  </TabsContent>
                  <TabsContent value="code">
                    <Suspense
                      fallback={
                        <Skeleton className="relative flex h-64 w-full items-center justify-center gap-2 text-center font-medium">
                          <Spinner />
                          loading code...
                        </Skeleton>
                      }
                    >
                      <RangePickerCode />
                    </Suspense>
                  </TabsContent>
                </Tabs>
                <p>
                  This is the date range picker component that allows users to
                  select a range of dates. It also allows users to navigate
                  through years. This is especially useful when selecting a very
                  long range of dates, such as a holiday period.
                </p>
              </section>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeading>Done!</TimelineHeading>
          <TimelineDot />
          <TimelineContent>
            <div className="prose">
              <p className="text-pretty">
                If you find any bugs or want to suggest improvements, feel free
                do so. This component is free to use, but if you find it useful,
                feel free to star the{" "}
                <Link
                  href={siteConfig.githubUrl}
                  target="_blank"
                  className="underline"
                >
                  repository
                </Link>{" "}
                on GitHub.
                <br />
                If you want to be extra cool, you can also buy me a coffee and I
                will be forever grateful.
              </p>
            </div>
            <Button
              className="bg-[#ff5f5f] text-destructive-foreground hover:bg-[#ff5f5f]"
              asChild
            >
              <Link
                // <a href='https://ko-fi.com/E1E2JREDN' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
                href="https://ko-fi.com/E1E2JREDN"
                target="_blank"
                rel="noreferrer"
              >
                <Coffee className="size-4" />
                Buy me a coffee
              </Link>
            </Button>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </main>
  )
}
