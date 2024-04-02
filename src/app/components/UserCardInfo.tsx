import GithubLogo from "./icons/GithubIcon";
import LocationIcon from "./icons/LocationIcon";
import LinkIcon from "./icons/LinkIcon";
import TwitterIcon from "./icons/TwitterIcon";
import BuildingIcon from "./icons/BuildingIcon";

const UserCardInfo = () => {
    return (
        <article className=" grid-areas bg-blue-900 p-4 rounded-xl text-white">
            <div className="section-logo bg-gray-200 p-1 grid place-content-center rounded-full h-24 w-24 mr-3 lg:mx-auto">
                <GithubLogo className="relative top-2 h-full w-full" />
            </div>
            <div className="section-title">
                <h2 className="font-bold text-3xl">The Octocat</h2>
                <p>@octocat</p>
            </div>
            <p className="section-date lg:text-right">Joined 26 Jun 2011</p>
            <p className="section-description mt-8 leading-loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ducimus
                facilis ullam aut repudiandae, molestias repellendus qui magni hic.
            </p>
            <div className="section-number flex justify-around bg-blue-950 mt-4 p-8 rounded-xl text-center">
                <article>
                    <p>Repos</p>
                    <p className="font-bold text-xl">8</p>
                </article>
                <article>
                    <p>Followers</p>
                    <p className="font-bold text-xl">3938</p>
                </article>
                <article>
                    <p>Following</p>
                    <p className="font-bold text-xl">9</p>
                </article>
            </div>
            <div className="section-social md:grid grid-cols-2 mt-4 space-y-3">
                <article className="flex space-x-2">
                    <i>
                        <LocationIcon className="fill-white w-full h-full" width={"1rem"}/>
                    </i>
                    <p>San Francisco</p>
                </article>
                <article className="flex space-x-2">
                    <i>
                        <LinkIcon className="fill-white w-full h-full" width={"1rem"}/>
                    </i>
                    <p>https://github.blog</p>
                </article>
                <article className="flex space-x-2">
                    <i>
                        <TwitterIcon className="fill-white w-full h-full" width={"1rem"} />
                    </i>
                    <p>Not Available</p>
                </article>
                <article className="flex space-x-2">
                    <i>
                        <BuildingIcon className="fill-white w-full h-full" width={"1rem"}/>
                    </i>
                    <p>@github</p>
                </article>
            </div>
        </article>
    );
}
export default UserCardInfo