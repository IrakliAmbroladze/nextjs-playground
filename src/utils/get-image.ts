import { Person } from "@/types/Person";

export default function getImageUrl(
  person: Person,
  size: string = "s"
): string {
  console.log("https://i.imgur.com/" + person.imageId + size + ".jpg");
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
