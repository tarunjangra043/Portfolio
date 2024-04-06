export default function Icon({ icon }: { icon: string }) {
  return (
    <>
      <a href="https://wa.me/+919350256027" target="_blank">
        <img className="whatsappIcon" src={icon} alt="" />
      </a>
    </>
  );
}
