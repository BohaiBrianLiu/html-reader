import * as React from 'react';
import * as DOMPurify from 'dompurify';

import styles from './HtmlReader.module.scss';

import { IHtmlReaderProps } from './IHtmlReaderProps';

export default class HtmlReader extends React.Component<
  IHtmlReaderProps,
  {}
> {
  public render(): React.ReactElement<IHtmlReaderProps> {
    const __html = DOMPurify.sanitize(
      this.props.htmlSourceCode
    );

    return (
      <section
        className={`${styles.htmlReader} ${styles.teams}`}
      >
        <div
          id="sp-html-reader"
          dangerouslySetInnerHTML={{
            __html,
          }}
        />
      </section>
    );
  }
}
