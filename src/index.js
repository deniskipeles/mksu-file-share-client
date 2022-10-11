import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { SampleBase } from './sample-base';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, ContextMenu } from '@syncfusion/ej2-react-filemanager';
/**
 * File Manager sample with NodeJs service
 */
export class NodeJSServer extends SampleBase {
    // hostUrl = "http://localhost:8000/";
    hostUrl = "http://142.93.119.251:8090/";
    render() {
        return (<div>
                <div className="control-section">
                    <FileManagerComponent id="filemanager" ajaxSettings={{
                url: this.hostUrl,
                getImageUrl: this.hostUrl + 'GetImage',
                uploadUrl: this.hostUrl + 'Upload',
                downloadUrl: this.hostUrl + 'Download'
            }}>
                    <Inject services={[NavigationPane, DetailsView, Toolbar, ContextMenu]}/>
                    </FileManagerComponent>
                </div>
            </div>);
    }
}

const root = createRoot(document.getElementById('sample'));
root.render(<NodeJSServer />);