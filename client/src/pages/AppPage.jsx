import { DMHeader } from '../components/layouts/app/DMHeader';
import { DMSidebar } from '../components/layouts/app/DMSidebar';
import { AppLayout } from '../components/layouts/AppLayout';
import { GuildList } from '../components/layouts/guild/GuildList';

export const AppPage = () => {
	return (
		<AppLayout>
			<GuildList />
			<DMHeader />
			<DMSidebar />
		</AppLayout>
	);
};
