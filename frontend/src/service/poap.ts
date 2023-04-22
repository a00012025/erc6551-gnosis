import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://api.poap.tech";
const poapApiKey =
  "ITFTN8QvDkxkjz2vNerLdIYWi1hhvRD2W8gMDG7rfDpENSou598YQftvINLCohkfwiEOK5xCAqOzboVF8oPbFZk0qmR4AhFaiPIP960nv1t4V1yZ0pxSoIHuveok3Y2N";

interface Poap {
  event: {
    id: number;
    fancy_id: string;
    name: string;
    event_url: string;
    image_url: string;
    country: string;
    city: string;
    description: string;
    year: number;
    start_date: string;
    end_date: string;
    expiry_date: string;
    supply: number;
  };
  tokenId: string;
  owner: string;
  created: string;
}

async function getPoaps(address: string): Promise<Poap[]> {
  return fetch(`${baseUrl}/actions/scan/${address}`, {
    headers: {
      accept: "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_POAP_API_KEY!,
    },
  }).then((res) => res.json());
}

export const usePoaps = (address: string, options?: any) =>
  useQuery(["poaps", address], () => getPoaps(address), options);
