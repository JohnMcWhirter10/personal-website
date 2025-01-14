import { ActivityType } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Activity = ({ activity }: { activity: ActivityType }) => {
    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary text-center ">
                    {activity.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
                {activity.description}
            </CardContent>
        </Card>
    );
};

export default Activity;
