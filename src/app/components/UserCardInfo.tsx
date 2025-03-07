import LocationIcon from "./icons/LocationIcon";
import LinkIcon from "./icons/LinkIcon";
import TwitterIcon from "./icons/TwitterIcon";
import BuildingIcon from "./icons/BuildingIcon";
import { UserCardProps } from '../types';

const UserCardInfo = ({ user }: UserCardProps) => {
    const formatDate = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(new Date(user.created_at));

    return (
        <article className="grid-areas bg-blue-900 p-4 rounded-xl text-white">
            <div className="section-logo bg-gray-200 p-1 grid place-content-center rounded-full h-24 w-24 mr-3 lg:mx-auto">
                <img 
                    src={user.avatar_url} 
                    alt={user.name || user.login}
                    className="rounded-full w-full h-full"
                />
            </div>
            <div className="section-title">
                <h2 className="font-bold text-3xl">{user.name || user.login}</h2>
                <p>@{user.login}</p>
            </div>
            <p className="section-date lg:text-right">Joined {formatDate}</p>
            <p className="section-description mt-8 leading-loose">
                {user.bio || 'No bio available'}
            </p>
            <div className="section-number flex justify-around bg-blue-950 mt-4 p-8 rounded-xl text-center">
                <article>
                    <p>Repos</p>
                    <p className="font-bold text-xl">{user.public_repos}</p>
                </article>
                <article>
                    <p>Followers</p>
                    <p className="font-bold text-xl">{user.followers}</p>
                </article>
                <article>
                    <p>Following</p>
                    <p className="font-bold text-xl">{user.following}</p>
                </article>
            </div>
            <div className="section-social md:grid grid-cols-2 mt-4 space-y-3">
                <article className="flex space-x-2">
                    <i>
                        <LocationIcon className="fill-white w-[1.2rem] h-[1.2rem]"/>
                    </i>
                    <p>{user.location || 'Not available'}</p>
                </article>
                <article className="flex space-x-2">
                    <i>
                        <LinkIcon className="fill-white w-[1.2rem] h-[1.2rem]" />
                    </i>
                    <p>
                        {user.blog ? (
                            <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer">
                                {user.blog.replace(/^(https?:\/\/)?(www\.)?/i, '').split('/')[0]}
                            </a>
                        ) : 'Not available'}
                    </p>
                </article>
                <article className="flex space-x-2">
                    <i>
                        <TwitterIcon className="fill-white w-[1.2rem] h-[1.5rem]" />
                    </i>
                    <p>{user.twitter_username || 'Not available'}</p>
                </article>
                <article className="flex space-x-2">
                    <i>
                        <BuildingIcon className="fill-white w-[1.2rem] h-[1.2rem]" />
                    </i>
                    <p>{user.company || 'Not available'}</p>
                </article>
            </div>
        </article>
    );
};

export default UserCardInfo;