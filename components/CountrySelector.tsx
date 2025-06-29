import { Select } from 'antd';
const { Option } = Select;

interface Country {
  id: string;
  name: string;
}

interface Props {
  countries: Country[];
  onSelect: (value: string) => void;
}

export const CountrySelector = ({ countries, onSelect }: Props) => (
  <Select placeholder="Select Country" onChange={onSelect}>
    {countries.map((country) => (
      <Option key={country.id} value={country.name}>
        {country.name}
      </Option>
    ))}
  </Select>
);
