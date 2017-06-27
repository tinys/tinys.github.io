/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'

export default class Index extends Page {
  render () {
    return (
      <div>
        <div className="wrap">
          <h1>Zola</h1>
          <p>
            Arnim Zola is a fictional supervillain appearing in American comic
            books by Marvel Comics. He is a master of biochemistry and is an
            enemy of Captain America and the Avengers. He first appeared in
            Captain America #208 (April 1977), created by writer/artist
            Jack Kirby. He was originally a Nazi biochemist during World War II
            and survived into the modern age by transferring his conscious mind
            into the body of a sophisticated robot which protected his mind by
            storing it in its chest and displaying a digital image of Zola's
            face on its chest plate.
          </p>
        </div>
        <div className="footer">with <b>♥</b> by lianjia-fe</div>
      </div>
    )
  }
}