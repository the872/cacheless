import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
    //
    // const calendarArray = [];
    // const today = new Date();
    //
    // function addBefore(number) {
    //     let count = 0;
    //     while (count < number) {
    //         let before = new Date(today);
    //         before.setDate(today.getDate() - count);
    //         calendarArray.unshift(before);
    //         count++;
    //     }
    // }
    //
    // function addNext(number) {
    //     let count = 0;
    //     while (count < number) {
    //         let after = new Date(today);
    //         after.setDate(today.getDate() + count);
    //         calendarArray.push(after);
    //         count++;
    //     }
    // }
    //
    // function addCurrent() {
    //     calendarArray.push(today);
    // }
    //
    // function getPreviousSunday(date = new Date()) {
    //     const previousMonday = new Date();
    //
    //     previousMonday.setDate(date.getDate() - date.getDay());
    //
    //     return previousMonday;
    // }
    //
    // this.addCurrent();
    // this.addBefore(90);
    // this.addNext(90);
    // console.log(this.getPreviousSunday(today))
// console.log(calendarArray);

  return (
    <Main
      meta={
        <Meta
          title="cacheless"
          description="react 18, next.js 12 & typescript 4.8"
        />
      }
    >
      <h1 className="text-2xl font-bold">
        Demo
      </h1>
    </Main>
  );
};

export default Index;
