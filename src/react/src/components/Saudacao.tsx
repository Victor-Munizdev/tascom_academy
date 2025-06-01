type Props = {
    name: string;
};
export default function Saudacao({ name }: Props) {
  return <h1>Olá, {name}!</h1>;
}
