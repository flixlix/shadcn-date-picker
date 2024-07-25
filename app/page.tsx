import DatePicker, {
  DateRangePicker,
  DateYearPicker,
} from "./_components/date-picker"
import DemoDisplay from "./_components/demo-display"

export default function Home() {
  return (
    <main className="prose container relative flex max-w-[768px] flex-1 flex-col gap-10 py-10">
      <section>
        <h2>Basic Date Picker</h2>
        <DemoDisplay>
          <DatePicker />
        </DemoDisplay>
      </section>
      <section>
        <h2>Date Range Picker</h2>
        <DemoDisplay>
          <DateRangePicker />
        </DemoDisplay>
      </section>
      <section>
        <h2>Date Year Picker</h2>
        <DemoDisplay>
          <DateYearPicker />
        </DemoDisplay>
      </section>
    </main>
  )
}
