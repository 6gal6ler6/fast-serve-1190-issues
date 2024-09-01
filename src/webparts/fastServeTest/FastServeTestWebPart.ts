import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import App, { IAppProps } from './components/App';

export interface IFastServeTestWebPartProps {
 //NOPE
}

export default class FastServeTestWebPart extends BaseClientSideWebPart<IFastServeTestWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IAppProps> = React.createElement(
      App,
      {
        webpartContext: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // protected onInit(): Promise<void> {
  //NOPE
  // }



  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


}
