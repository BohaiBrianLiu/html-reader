import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import {
  BaseClientSideWebPart,
  IWebPartPropertiesMetadata,
} from '@microsoft/sp-webpart-base';

import * as strings from 'HtmlReaderWebPartStrings';
import HtmlReader from './components/HtmlReader';
import { IHtmlReaderProps } from './components/IHtmlReaderProps';

export interface IHtmlReaderWebPartProps {
  htmlSourceCode: string;
}

export default class HtmlReaderWebPart extends BaseClientSideWebPart<IHtmlReaderWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IHtmlReaderProps> =
      React.createElement(HtmlReader, {
        htmlSourceCode:
          this.properties.htmlSourceCode,
      });

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(
      this.domElement
    );
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get propertiesMetadata(): IWebPartPropertiesMetadata {
    return {
      htmlSourceCode: { isHtmlString: true },
    };
  }

  private validHtmlString(value: string): string {
    const regex =
      /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
    if (regex.test(value)) {
      return strings.ErrorMessage;
    }
    return '';
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description:
              strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: '',
              groupFields: [
                PropertyPaneTextField(
                  'htmlSourceCode',
                  {
                    label: 'HTML Source Code',
                    multiline: true,
                    placeholder:
                      'Add your HTML codes here.',
                    deferredValidationTime: 100,
                    onGetErrorMessage:
                      this.validHtmlString.bind(
                        this
                      ),
                  }
                ),
              ],
            },
          ],
        },
      ],
    };
  }
}
