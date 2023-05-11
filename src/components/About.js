import React from 'react'

export default function About() {
  return (
    <div className='d-flex flex-column  justify-content-evenly my-4'>
       <p className='d-flex  justify-content-evenly'>
        <a className="btn btn-primary mx-3" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
        <button className="btn btn-primary mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
        <button className="btn btn-primary mx-3" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
        </p>
        <div className="row">
        <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
            </div>
        </div>
        <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
