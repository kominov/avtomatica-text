export default function getData(timeStamp) {
    const date = new Date(timeStamp);

    const day = date.getDate();

    const month = date.getMonth() + 1;

    const year = date.getFullYear();

    return { day, month, year };
}