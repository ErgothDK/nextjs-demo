export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "Success",
      meetup: {
        id: 1,
        title: "some title",
        description: "some description",
        address: "some address",
        image:
          "https://www.meetup.com/blog/wp-content/uploads/2022/03/friends-hiking_turn-casual-friendships-into-close-friendships-1120x630.jpg",
      },
    });
  } else if (req.method === "POST") {
    const data = req.body;

    const { id, title, description, address, image } = data;
    res.status(201).json({ message: "Meetup created", meetup: data });
  }
}
