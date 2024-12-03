import React from "react";

const Project = () => {
    return (
        <div className=" border-base-300 flex-wrap project">
            <div className="card bg-base-100  w-64 border border-inherit">
                <div className="card-body">
                    <h2 className="card-title">ProtoAuth</h2>
                    <p>Authentication API using express js and JWT token</p>
                    <div className="card-actions justify-center">
                        <button
                            className="btn"
                            onClick={() => {
                                window.open(
                                    "https://github.com/just4kick/protoAuth"
                                );
                            }}
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-64 border border-inherit">
                <div className="card-body">
                    <h2 className="card-title">Blockchain Evm</h2>
                    <p>
                        Electronic Voting Machine which use blockchain to store
                        Votes.
                    </p>
                    <div className="card-actions justify-center">
                        <button
                            className="btn "
                            onClick={() => {
                                window.open(
                                    "https://github.com/just4kick/BlockchainBasedVotingSystem"
                                );
                            }}
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
