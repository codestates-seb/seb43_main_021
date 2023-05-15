package com.codestates.seb_43_21_main_project.auctionItem.mapper;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto.Patch;
import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto.Post;
import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto.Response;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction.AuctionBuilder;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-15T16:40:31+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AuctionMapperImpl implements AuctionMapper {

    @Override
    public Auction auctionPostDtoToAuction(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AuctionBuilder auction = Auction.builder();

        auction.member( postToMember( requestBody ) );
        auction.name( requestBody.getName() );
        auction.content( requestBody.getContent() );
        auction.period( requestBody.getPeriod() );
        auction.auctionStatus( requestBody.getAuctionStatus() );

        return auction.build();
    }

    @Override
    public Auction auctionPatchDtoToAuction(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AuctionBuilder auction = Auction.builder();

        auction.auctionItemId( requestBody.getAuctionItemId() );
        auction.name( requestBody.getName() );
        auction.content( requestBody.getContent() );
        auction.period( requestBody.getPeriod() );

        return auction.build();
    }

    @Override
    public List<Response> auctionToAuctionResponseDtos(List<Auction> auctions) {
        if ( auctions == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( auctions.size() );
        for ( Auction auction : auctions ) {
            list.add( auctionToAuctionResponseDto( auction ) );
        }

        return list;
    }

    protected Member postToMember(Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }
}
