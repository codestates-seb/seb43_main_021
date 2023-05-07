package com.codestates.seb_43_21_main_project.auctionItem.mapper;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto.Patch;
import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto.Post;
import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto.Response;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction.AuctionBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-07T16:08:51+0900",
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

        auction.name( requestBody.getName() );
        auction.content( requestBody.getContent() );
        auction.period( requestBody.getPeriod() );
        auction.categoryId( requestBody.getCategoryId() );
        auction.auctionStatus( requestBody.getAuctionStatus() );

        return auction.build();
    }

    @Override
    public Response auctionToAuctionResponseDto(Auction auction) {
        if ( auction == null ) {
            return null;
        }

        Response response = new Response();

        response.setAuctionItemId( auction.getAuctionItemId() );
        response.setMemberId( auction.getMemberId() );
        response.setName( auction.getName() );
        response.setContent( auction.getContent() );
        response.setCreatedDate( auction.getCreatedDate() );
        response.setModifiedDate( auction.getModifiedDate() );
        response.setCategoryId( auction.getCategoryId() );
        response.setPeriod( auction.getPeriod() );
        response.setBidItemId( auction.getBidItemId() );
        response.setAuctionStatus( auction.getAuctionStatus() );

        return response;
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
        auction.categoryId( requestBody.getCategoryId() );

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
}
