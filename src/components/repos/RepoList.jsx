import PropTypes from "prop-types"
import RepoItem from "./RepoItem"

const RepoList = ({repos}) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
            <h2 className="text-3xl my-3 font-bold card-title">
                Lastest Repositories 
            </h2>
            {repos.map((repo) => (<RepoItem key={repo.id} repo={repo} />))}
        </div>
    </div>
  )
}

RepoList.propType = {
    repos: PropTypes.array.isRequired,
}

export default RepoList