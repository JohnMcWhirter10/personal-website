import { ActivityType } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Activity = ({ activity }: { activity: ActivityType }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold text-primary text-center ">
                    {activity.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground font-georgia text-sm text-center min-w-96">
                {activity.description}
            </CardContent>
        </Card>
    );
};

export default Activity;
