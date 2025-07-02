import { Select } from 'antd';
const { Option } = Select;

interface Measure {
  label: string;
  value: string;
}

interface Props {
  onSelect: (value: string) => void;
}

const measures: Measure[] = [
  { label: 'Life Expectancy', value: 'life_expectancy' },
  { label: 'Population', value: 'population' },
  { label: 'Net Migration Rate', value: 'net_migration_rate' },
];

export const MeasureSelector = ({ onSelect }: Props) => (
  <Select placeholder="Select Measure" onChange={onSelect}>
    {measures.map((measure) => (
      <Option key={measure.value} value={measure.value}>
        {measure.label}
      </Option>
    ))}
  </Select>
);
