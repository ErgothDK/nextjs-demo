import MeetupList from "@/components/meetups/MeetupList";
import Image from "next/image";

const DUMMY_EVENTS = [
  {
    id: Math.random().toString(),
    title: "Brunch Meetings",
    description: "Meet new people while enjoy a brunch",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2022/03/friends-hiking_turn-casual-friendships-into-close-friendships-1120x630.jpg",
    address: "C. 3 Sur s/n · Playa del Carmen, Qro",
  },
  {
    id: Math.random().toString(),
    title: "Birthday Meeting",
    description: "A meeting to celebrate multiple people birthdays",
    image:
      "https://secure.meetupstatic.com/photos/event/6/2/c/5/600_517165285.webp?w=384",
    address: "Calle 44 Nte · Playa del Carmen, Qro",
  },
];

export default async function HomePage() {
  const meetups = await getData();
  return <MeetupList meetups={meetups} />;
}

async function getData() {
  return DUMMY_EVENTS;
}
