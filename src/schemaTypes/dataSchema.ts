
export type Prize = {
  amount: number;
  currency: string;
}

export type Tags = {
  name: string,
  color: string,
  bgColor: string
}

export type BountyData = {
  icon: string;
  title: string;
  organiserName: string;
  date: string;
  prize?: Prize | null;
  rank?: string | null;
  tags: Tags[];
  NumberOfParticipants?: number;
  key: number
}