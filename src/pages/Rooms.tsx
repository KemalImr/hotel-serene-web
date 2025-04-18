
import Layout from "@/components/layout/Layout";
import RoomsList from "@/components/rooms/RoomsList";
import RoomHero from "@/components/rooms/RoomHero";

const Rooms = () => {
  return (
    <Layout>
      <RoomHero />
      <RoomsList />
    </Layout>
  );
};

export default Rooms;
