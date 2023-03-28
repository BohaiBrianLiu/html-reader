import * as React from 'react';
import * as DOMPurify from 'dompurify';

import styles from './HtmlReader.module.scss';

import { IHtmlReaderProps } from './IHtmlReaderProps';

export default class HtmlReader extends React.Component<
  IHtmlReaderProps,
  {}
> {
  public render(): React.ReactElement<IHtmlReaderProps> {
    const { htmlSourceCode } = this.props;

    return (
      <section
        className={`${styles.htmlReader} ${styles.teams}`}
      >
        <div
          id="sp-html-reader"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              htmlSourceCode
            ),
          }}
        />
        {/* <div
          id="sp-html-reader"
          dangerouslySetInnerHTML={{
            __html: htmlSourceCode,
          }}
        /> */}
      </section>
    );
  }
}
