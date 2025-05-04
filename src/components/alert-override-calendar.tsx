import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Package } from "lucide-react"

export default function AlertOverrideCalendar({
  className,
  installMode = "manual",
}: React.ComponentProps<typeof Alert> & {
  installMode?: "auto" | "manual"
}) {
  return (
    <Alert variant="warning" className={className}>
      <Package className="size-4" />
      <AlertTitle>Update Required</AlertTitle>
      <AlertDescription>
        In case you have already used the calendar or date picker component from
        shadcn, you will need to override{" "}
        {installMode === "auto"
          ? "the calendar component"
          : "it with the following content"}
        . We are using{" "}
        <code className="whitespace-pre rounded bg-slate-200/50 p-1 text-xs dark:bg-slate-500/20">
          react-day-picker
        </code>{" "}
        version 9, while shadcn is still on v8, which are not compatible with
        each other.
      </AlertDescription>
    </Alert>
  )
}
