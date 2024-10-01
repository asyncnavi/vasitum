import StatCard, { StatCardProps } from "../../components/stat-card";

export type StatCardWithId = StatCardProps & {
    id: string;
}

const statCardsData: StatCardWithId[] = [
    {
        id: 'available-pos',
        title: 'Available Position',
        value: 24,
        helperText: '4 urgently need',
        variant: 'orange',
    },
    {
        id: 'job-open',
        title: 'Job Open',
        value: 10,
        helperText: '4 urgently need',
        variant: 'blue',
    },
    {
        id: 'new-employee',
        title: 'New Employees',
        value: 24,
        helperText: '4 urgently need',
        variant: 'pink',
    }
];

const Stats = () => {
    return (
        <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
            {
                statCardsData.map((statCard) => (
                    <StatCard
                        key={statCard.id}
                        title={statCard.title}
                        value={`${statCard.value}`}
                        helperText={statCard.helperText}
                        variant={statCard.variant}
                    />
                ))
            }
        </div>
    );
};

export default Stats;
